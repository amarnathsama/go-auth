package models

type Message struct {
	Id         uint    `json:"id"`
	Content    string  `json:"content"`
	Channel_Id uint    `json:"channel_id" `
	Channel    Channel `gorm:"foreignKey:Channel_Id"`
}
