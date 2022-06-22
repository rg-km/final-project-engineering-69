package api

import (
	"final-project-engineering-69/Backend/repository"
	"fmt"
	"net/http"
)

type API struct {
	userRepo    repository.UserRepository
	biodataRepo repository.BiodataRepository
	mux         *http.ServeMux
}

func NewAPI(userRepo repository.UserRepository, biodataRepo repository.BiodataRepository) API {
	mux := http.NewServeMux()
	api := API{
		userRepo, biodataRepo, mux,
	}

	mux.Handle("/api/user/login", api.POST(http.HandlerFunc(api.login)))
	mux.Handle("/api/user/logout", api.POST(http.HandlerFunc(api.logout)))
	mux.Handle("/api/user/register", api.POST(http.HandlerFunc(api.register)))

	mux.Handle("/api/user/profile", api.GET(http.HandlerFunc(api.profile)))
	mux.Handle("/api/user/profile/editbiodata", api.POST(http.HandlerFunc(api.editBiodata)))

	return api
}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	fmt.Println("Starting Web Server at http://localhost:8080/")
	http.ListenAndServe(":8080", api.Handler())
}
