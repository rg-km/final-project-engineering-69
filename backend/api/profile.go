package api

import (
	"encoding/json"
	"net/http"
)

type ProfileErrorResponse struct {
	Error string `json:"error"`
}

type Profile struct {
	Name   string `json:"name"`
	Email  string `json:"email"`
	Gender string `json:"gender"`
	No_hp  string `json:"no_hp"`
}

type ProfileSuccesResponse struct {
	Profile []Profile `json:"profile"`
}

type EditProfileErrorResponse struct {
	Error string `json:"error"`
}

type EditProfile struct {
	Nama   string `json:"nama"`
	Email  string `json:"email"`
	Gender string `json:"gender"`
	No_hp  string `json:"no_hp"`
}

type EditProfileSuccesResponse struct {
	EditProfile []EditProfile `json:"biodata"`
}

func (api *API) profile(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	response := ProfileSuccesResponse{}
	response.Profile = make([]Profile, 0)

	email := req.URL.Query().Get("email")

	profile, err := api.userRepo.GetProfile(email)
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

	response.Profile = append(response.Profile, Profile{
		Name:   profile.Nama,
		Email:  profile.Email,
		Gender: profile.Gender,
		No_hp:  profile.No_hp,
	})

	encoder.Encode(response)
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

	_, err = api.userRepo.EditProfile(editProfile.Nama, editProfile.Email, editProfile.Gender, editProfile.No_hp)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(EditProfileErrorResponse{Error: err.Error()})
		w.Write([]byte(err.Error()))
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Success"))
}
