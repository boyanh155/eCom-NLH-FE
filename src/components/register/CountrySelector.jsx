import React,{useState,useEffect} from 'react'

import {FormControl, InputLabel,NativeSelect} from "@material-ui/core"
import { getRegionDistrict } from '../../apis/countryApi'
import styled from 'styled-components'
const CountrySelectorWrapper = styled.div`
    margin-bottom:16px;
    display:flex;
`
const CustomSelect = styled(NativeSelect)`
    margin:0 4px;
    padding:16px 0 16px 12px;
    select {
        font-family:"Lexend Deca", sans-serif;
        font-size:16px;
        line-height:20px;
    }
`
const CountrySelector = ({regions}) => {
    const [listDistrict,setListDistrict] = useState([])
    const [stateCity, setStateCity] = useState([])
    //get district
    useEffect(()=>{
        getRegionDistrict(stateCity).then(res=>{
            let districts = res.data.results || []
            setListDistrict(districts)
        }).catch(e=>console.log(e))
    },[stateCity])
    //change city
    const handleRegionChange = (e)=>{
        setStateCity(e.target.value)
    }
    return (
        <CountrySelectorWrapper>
                        <FormControl style={{width:"100%"}}>
                <CustomSelect
                defaultValue={'DEFAULT'}
                    style={{
                        padding:"16px 0 16px 12px"
                    }}
                    onChange={(e)=>handleRegionChange(e)}
                >
                    <option value="DEFAULT" selected disabled> Select...</option>
                    {
                        regions.map((region)=>{
                            return <option key={region.province_id} value={region.province_id}>{region.province_name}</option>
                        })
                    }
                    

                </CustomSelect>
                <small className="form-text text-muted">City</small>
            </FormControl>
            <FormControl style={{width:"100%"}}> 
                    <CustomSelect
                    style={{padding:"16px 0 16px 12px"}}
                    
                    >
                    <option value="" disabled>Select...</option>
                    {
                        listDistrict.map((district)=>{
                            return <option key={district.district_id} value={district.district_id}>{district.district_name}</option>
                        })
                    }

                    </CustomSelect>

            </FormControl>
        </CountrySelectorWrapper>
    )
}

export default CountrySelector
