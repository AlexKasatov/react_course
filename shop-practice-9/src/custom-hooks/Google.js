import  {  useEffect } from 'react';

//!нужно подключить библиотеку Google Analytics

const Google = () => {
    function useAnalytics() {
        useEffect(() => {
            gtag('event', 'component_rendered')
        })
    }

    useAnalytics() //* дальше можно использовать хук так
}

export default Google;


//? дальше уже этот хук импортить в компонент какой нужно