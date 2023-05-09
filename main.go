package main

import (
	"log"

	"github.com/amarnathsama/go-chat-final/database"
	"github.com/amarnathsama/go-chat-final/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	// "github.com/amarnathsama/go-chat-final/pkg/websocket"
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
