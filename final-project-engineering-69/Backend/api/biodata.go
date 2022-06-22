package api

import (
	"encoding/json"
	"net/http"
)

type BiodataErrorResponse struct {
	Error string `json:"error"`
}

type Biodata struct {
	ID            int    `json:"id"`
	Nama          string `json:"nama"`
	Jenis_kelamin string `json:"jenis_kelamin"`
	No_hp         string `json:"no_hp"`
	Alamat        string `json:"alamat"`
}

type BiodataSuccesResponse struct {
	Biodata []Biodata `json:"biodata"`
}

func (api *API) editBiodata(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var biodata Biodata
	err := json.NewDecoder(req.Body).Decode(&biodata)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(BiodataErrorResponse{Error: err.Error()})
		return
	}

	_, err = api.biodataRepo.EditBiodata(biodata.ID, biodata.Nama, biodata.Jenis_kelamin, biodata.No_hp, biodata.Alamat)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(BiodataErrorResponse{Error: err.Error()})
		w.Write([]byte(err.Error()))
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Success"))
}
