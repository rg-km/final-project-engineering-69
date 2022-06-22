package api

import (
	"encoding/json"
	"net/http"
)

type ProfileErrorResponse struct {
	Error string `json:"error"`
}

type Profile struct {
	Name  string `json:"name"`
	Email string `json:"email"`
}

type ProfileSuccesResponse struct {
	Profile []Profile `json:"profile"`
}

func (api *API) profile(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	response := ProfileSuccesResponse{}
	response.Profile = make([]Profile, 0)

	profile, err := api.userRepo.GetProfile()
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(ProfileErrorResponse{Error: err.Error()})
			return
		}
	}()
	if err != nil {
		return
	}

	for _, profile := range profile {
		response.Profile = append(response.Profile, Profile{
			Name:  profile.Nama,
			Email: profile.Email,
		})
	}

	encoder.Encode(response)
}
