import axios from 'axios';

const Blood_api_base_url = "http://localhost:8080/api/v1/bloodbanks";

class BloodbankService{

    getBloodbank(){
        return axios.get(Blood_api_base_url);
    }

    createBLoodbank(bloodbank){
        return axios.post(Blood_api_base_url, bloodbank);
    }

    getBloodbankById(bloodbankId){
        return axios.get(Blood_api_base_url + '/' + bloodbankId);
    }

    updateBloodbank(bloodbank, bloodbankId){
        return axios.put(Blood_api_base_url+ '/' +bloodbankId,bloodbank);
    }

    deleteBloodbank(bloodbankId){
        return axios.delete(Blood_api_base_url+ '/' + bloodbankId);
    }
}

export default new BloodbankService()