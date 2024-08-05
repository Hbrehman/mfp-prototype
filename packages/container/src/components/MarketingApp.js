import { mount } from 'marketing/MarketingApp';
import React, {useRef, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory(); //copy of browser history

    useEffect(() => {

        const result = mount(ref.current, {
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;
                if (pathname !== nextPathname)
                    history.push(nextPathname)
            }
        });

        console.log({ result })
        const { onParentNavigate } = result || {};

        console.log({ onParentNavigate })

        history.listen(onParentNavigate)
    }, []);

    return <div ref={ref} />
  
}
