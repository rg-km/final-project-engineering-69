package repository

type User struct {
	ID        int     `json:"id"          db:"id"`
	Nama      string  `json:"nama"        db:"nama"`
	Email     string  `json:"email"       db:"email"`
	Password  string  `json:"password"    db:"password"`
	Gender    string  `json:"gender"      db:"gender"`
	CreatedAt *string `json:"created_at"  db:"created_at"`
	UpdatedAt *string `json:"updated_at"  db:"updated_at"`
}
