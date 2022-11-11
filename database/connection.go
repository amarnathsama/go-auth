package database

import (
	"github.com/amarnathsama/go-auth/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {

	dsn := "test:PASSWORDd1!@tcp(127.0.0.1:3306)/TestDB?charset=utf8mb4&parseTime=True&loc=Local"
	connection, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("could not connect to the database")
	}
	DB = connection
	connection.AutoMigrate(&models.User{})
}
