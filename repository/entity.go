package repository

type User struct {
	ID       int    `json:"user_id"`
	Nama     string `json:"nama"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Role     string `json:"role"`
	Loggedin bool   `json:"loggedin"`
	Token    string `json:"token"`
}

type Biodata struct {
	ID           int    `json:"biodata_id"`
	Nama         string `json:"nama"`
	JenisKelamin string `json:"jenis_kelamin"`
	NoHP         string `json:"no_hp"`
	Alamat       string `json:"alamat"`
}
