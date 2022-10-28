import axios from "axios";

// Back4app
export const country = async() =>
    await axios.get(
        "https://parseapi.back4app.com/classes/Vietnam_City?keys=name", {
            headers: {
                "X-Parse-Application-Id": "GbHLzworuBjYjjfJdyJQl7RxHa6Xmu4dRUQv690o", // This is your app's application id
                "X-Parse-REST-API-Key": "zwzg70kTyj20TTZRaU9rwEJGr2vuMW0UQevpw9Od", // This is your app's REST API key
            },
        }
    );
//Region list function
export const getRegion = async() =>
    await axios.get("https://vapi.vnappmob.com/api/province");

export const getRegionDistrict = async(province_id) =>
    await axios.get(
        `https://vapi.vnappmob.com/api/province/district/${province_id}`
    );