'use client'

import axios from "axios"
import { useEffect, useState } from "react";
import Search from "../search";
import Tag from "../tag";
import { formatDate } from "@/utils/formatDate";
import SearchDate from "../search-date";
import Button from "../button";
import { Form } from "../form";

export default function Section() {
    const [cases1, setCases1] = useState([]);
    const [cases2, setCases2] = useState([]);
    const [cases3, setCases3] = useState([]);

    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [day, setDay] = useState('');
    const [select, setSelect] = useState({ "state": '', "country": '', "cases": '', "deaths": '', "suspects": '' });

    useEffect(() => {
        getCovidBrasil()
    }, [])

    async function getCovidBrasil() {
        setFilter('brasil')
        const response = await axios.get(`https://covid19-brazil-api.now.sh/api/report/v1`);

        if (response.status === 200) {
            setCases1(response.data.data)
            console.log('sucesso')
        } else {
            console.log('erro', response.status)
        }
    }

    async function getCovidBrasilData(date: string) {
        setFilter('brasilData')
        const response = await axios.get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/${date}`);

        if (response.status === 200) {
            setCases2(response.data.data)
            console.log('sucesso')
        } else {
            console.log('erro', response.status)
        }
    }

    async function getCovidCountries() {
        setFilter('countries')
        const response = await axios.get(`https://covid19-brazil-api.now.sh/api/report/v1/countries`);

        if (response.status === 200) {
            setCases3(response.data.data)
            console.log('sucesso')
        } else {
            console.log('erro', response.status)
        }
    }

    function selectInfo(info: any) {
        setSelect({
            "state": info.state,
            "country": info.country,
            "cases": info.cases,
            "deaths": info.deaths,
            "suspects": info.suspects,
        })
    }

    return (
        <div className="container flex flex-col gap-4 bg-slate-300 rounded-md p-8">
            <div className="flex flex-wrap justify-between gap-3">
                <div className="flex w-full max-w-[550px] flex-col sm:flex-row gap-3">
                    <Search onChange={(e: any) => setSearch(e.target.value.toUpperCase())} />

                    {filter !== 'countries' &&
                        <SearchDate
                            onChange={(e: any) => setDay(formatDate(e.target.value))}
                            onClick={() => getCovidBrasilData(day)}
                            disabled={day === '' ? true : false}
                        />
                    }
                </div>

                <div className="flex">
                    {filter === 'countries' ?
                        <Button onClick={() => getCovidBrasil()} name={'Exibir estados Brasileiros'} />
                        :
                        <Button onClick={() => getCovidCountries()} name={'Exibir Países'} />
                    }
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col w-full h-[382px] overflow-auto gap-1 p-2 rounded-md bg-gray-400">
                    {filter === 'brasil' &&
                        cases1.map((item: any, i: number) => (
                            item.state.toUpperCase().includes(search.toUpperCase()) &&
                            <Tag key={i} name={item.state} onClick={() => selectInfo(item)} />
                        ))
                    }

                    {filter === 'brasilData' &&
                        cases2.map((item: any, i: number) => (
                            item.state.toUpperCase().includes(search.toUpperCase()) &&
                            <Tag key={i} name={item.state} onClick={() => selectInfo(item)} />
                        ))
                    }

                    {filter === 'countries' &&
                        cases3.map((item: any, i: number) => (
                            item.country.toUpperCase().includes(search.toUpperCase()) &&
                            <Tag key={i} name={item.country} onClick={() => selectInfo(item)} />
                        ))
                    }
                </div>

                <div className="p-2 min-w-[150px] bg-color1 rounded-md text-white">
                    {select.state === undefined ?
                        <p>País: {select.country === null ? '?' : select.country}</p>
                        :
                        <p>Estado: {select.state === null ? '?' : select.state}</p>
                    }
                    <p>Casos: {select.cases === null ? '?' : select.cases}</p>
                    <p>Mortes: {select.deaths === null ? '?' : select.deaths}</p>
                    <p>Suspeitas: {select.suspects === null || select.suspects === undefined ? '?' : select.suspects}</p>
                </div>
            </div>

            <Form />
        </div>
    );
}
