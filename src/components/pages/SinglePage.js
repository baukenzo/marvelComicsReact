import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';
import AppBanner from "../appBanner/AppBanner";

// Хотелось бы вынести функцию по загрузке данных как отдельный аргумент
// Но тогда мы потеряем связь со стэйтами загрузки и ошибки
// А если вынесем их все в App.js - то они будут одни на все страницы

const SinglePage = ({Component, dataType}) => {
        const {idk} = useParams();
        const [data, setData] = useState(null);
        const { getComic, getCharacter, clearError, process, setProcess} = useMarvelService();

        useEffect(() => {
            updateData()
        }, [idk])

        const updateData = () => {
            clearError();

            switch (dataType) {
                case 'comic':
                    getComic(idk).then(onDataLoaded)
                    .then(() => setProcess('confirmed'))
                    break;
                case 'character':
                    getCharacter(idk).then(onDataLoaded)
                    .then(() => setProcess('confirmed'))
            }
        }

        const onDataLoaded = (data) => {
            setData(data);
        }

        return (
            <>
                <AppBanner/>
                {setContent(process, Component, data)}
            </>
        )
}

export default SinglePage;