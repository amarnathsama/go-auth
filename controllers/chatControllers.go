package controllers

import (
	"github.com/amarnathsama/go-chat-final/database"
	"github.com/amarnathsama/go-chat-final/models"
	"github.com/gofiber/fiber/v2"
)

func FetchChannels(c *fiber.Ctx) error {

	var channels models.Channel
	result := database.DB.Find(&channels)
	return c.JSON(result)
}
