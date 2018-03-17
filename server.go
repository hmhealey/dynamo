package main

import (
	"net/http"
	"os"
	"os/signal"
	"syscall"

	"github.com/gorilla/mux"
)

func main() {
	staticHandler := http.StripPrefix("/static/", http.FileServer(http.Dir("./dist")))
	indexHandler := http.HandlerFunc(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "dist/index.html")
	}))

	router := mux.NewRouter()
	router.Handle("/static/{anything:.*}", staticHandler).Methods("GET")
	router.Handle("/{anything:.*}", indexHandler).Methods("GET")
	err := http.ListenAndServe(":8888", router)
	if err != nil {
		panic(err)
	}

	interruptChan := make(chan os.Signal, 1)
	signal.Notify(interruptChan, os.Interrupt, syscall.SIGINT, syscall.SIGTERM)
	<-interruptChan
}
