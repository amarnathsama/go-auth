package main

import (
	"log"

	"github.com/amarnathsama/go-auth/database"
	"github.com/amarnathsama/go-auth/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	database.Connect()
	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))
	routes.Setup(app)
	log.Fatal(app.Listen(":8000"))
}
