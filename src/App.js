import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import Image from "./components/Image/Image";
import Loader from "./components/Loader/Loader";
import Message from "./components/Message/Message";
import Search from "./components/Search/Search";

function App() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("nature");
  const [error, setError] = useState(null);

  const ref = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (error) {
        setError(false);
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  useEffect(() => {
    setError(null);
    setPhotos([]);
  }, [query]);

  const lastPhoto = useCallback((node) => {
    
    if (ref.current) ref.current.disconnect();
    ref.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
        console.log(entries);
      }
    });

    if (node) {
      ref.current.observe(node);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    setError(null);

    fetch(`https://protected-garden-45997.herokuapp.com/${query}/${page}`, {
      signal: controller.signal
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data.photos)) {
          setPhotos((prev) => [...prev, ...data.photos]);
          setIsLoading(false);
          setError(null);
        } else {
          throw new Error(data);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setError("Cannot Load Photos");
        
      });

    return () => {
      controller.abort();
    };
  }, [page, query]);

  return (
    <>
      <AppBar />
      <Search setQuery={setQuery} />
      <div className="App">
        {error && <Message message={error} />}
        <div className="container">
          {photos.map((photo, id) => {
            return id === photos.length - 1 ? (
              <Image src={photo} key={id} ref={lastPhoto} />
            ) : (
              <Image src={photo} key={id} />
            );
          })}
          {isLoading && <Loader />}
        </div>
      </div>
    </>
  );
}

export default App;
