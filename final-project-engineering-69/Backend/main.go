package main

import (
	"fmt"
	"log"
	"test/api"
	"test/repository"

	"github.com/jmoiron/sqlx"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sqlx.Open("sqlite3", "./test.db")
	if err != nil {
		log.Fatal("Error opening database: ", err)
	}

	fmt.Println("Database connected")

	userRepo := repository.NewUserRepository(db)
	biodataRepo := repository.NewBiodataRepository(db)

	mainAPI := api.NewAPI(*userRepo, *biodataRepo)
	mainAPI.Start()
}
