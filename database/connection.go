package database

import (
	"github.com/amarnathsama/go-chat-final/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {

	dsn := "root:password@tcp(127.0.0.1:3306)/test?charset=utf8mb4&parseTime=True&loc=Local"
	connection, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("could not connect to the database")
	}
	DB = connection
	connection.AutoMigrate(&models.User{}, &models.Channel{}, &models.Message{})
}
