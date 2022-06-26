package repository

import (
	"github.com/jmoiron/sqlx"
)

type password struct {
	db *sqlx.DB
}
