package api

import (
	"encoding/json"
	"net/http"
)

type EditProfileErrorResponse struct {
	Error string `json:"error"`
}

type EditProfile struct {
	Nama   string `json:"nama"`
	Email  string `json:"email"`
	Gender string `json:"gender"`
}

type EditProfileSuccesResponse struct {
	EditProfile []EditProfile `json:"biodata"`
}

func (api *API) editProfile(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var editProfile EditProfile
	err := json.NewDecoder(req.Body).Decode(&editProfile)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(EditProfileErrorResponse{Error: err.Error()})
		return
	}

	_, err = api.userRepo.EditProfile(editProfile.Nama, editProfile.Email, editProfile.Gender)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(EditProfileErrorResponse{Error: err.Error()})
		w.Write([]byte(err.Error()))
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Success"))
}
