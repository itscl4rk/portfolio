import { useEffect } from 'react';
interface IconProps {
    name: string;
}
const ChangeTitle = ({ name }: IconProps) => {
    useEffect(() => {
        document.title = name;
        console.log(document.title);
    }, [name]);
    return null;
};

export default ChangeTitle;
