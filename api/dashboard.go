package api

import (
	"encoding/json"
	"net/http"
	"strconv"
)

type DashboardErrorResponse struct {
	Error string `json:"error"`
}

type Dashboard struct {
	Name string `json:"name"`
}
type DashboardSuccesResponse struct {
	Dashboard []Dashboard `json:"dashboard"`
}

func (api *API) dashboard(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	response := DashboardSuccesResponse{}
	response.Dashboard = make([]Dashboard, 0)

	id := req.URL.Query().Get("id")
	idInt, err := strconv.Atoi(id)

	dashboard, err := api.userRepo.Dashboard(int64(idInt))
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

	response.Dashboard = append(response.Dashboard, Dashboard{
		Name: dashboard.Nama,
	})

	encoder.Encode(response)
}
