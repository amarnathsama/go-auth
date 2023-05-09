package models

type User struct {
	Id       uint   `json:"id"`
	Username string `json:"username" gorm:"unique; not null"`
	Email    string `json:"email" gorm:"unique"`
	Password []byte `json:"-"`
}
