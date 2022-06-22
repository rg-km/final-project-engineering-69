package repository

import (
	"github.com/jmoiron/sqlx"
)

type BiodataRepository struct {
	db *sqlx.DB
}

type BiodataErrorResponse struct {
	Error string `json:"error"`
}

type BiodataSuccesResponse struct {
	Biodata []Biodata `json:"biodata"`
}

func NewBiodataRepository(db *sqlx.DB) *BiodataRepository {
	return &BiodataRepository{db: db}
}

func (u *BiodataRepository) NewBiodata(nama string, jenis_kelamin string, no_hp string, alamat string) ([]Biodata, error) {
	_, err := u.db.Exec("INSERT INTO biodata (nama, jenis_kelamin, no_hp, alamat) VALUES (?, ?, ?, ?)", nama, jenis_kelamin, no_hp, alamat)
	if err != nil {
		return nil, err
	}

	return nil, nil

}

func (u *BiodataRepository) EditBiodata(id int, nama string, jenis_kelamin string, no_hp string, alamat string) ([]Biodata, error) {
	_, err := u.db.Exec("UPDATE biodata SET nama = ?, jenis_kelamin = ?, no_hp = ?, alamat = ? WHERE id = ?", nama, jenis_kelamin, no_hp, alamat, id)
	if err != nil {
		return nil, err
	}

	return nil, nil

}
