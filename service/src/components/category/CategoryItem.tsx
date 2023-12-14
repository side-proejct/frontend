import { useState } from 'react';
import { CategoryItemsProps } from './type';

export default function CategoryItem({
    key,
    id,
    title,
    setActiveCategoriesData,
    activeCategoriesData,
}: CategoryItemsProps) {
    const [categoriesItemClicked, setCategoriesItemClicked] = useState<boolean>(false);
    const handleActiveCategoryItem = (e: React.MouseEvent<HTMLElement>) => {
        const { id } = e.target as HTMLButtonElement;

        const set = new Set(activeCategoriesData);
        if (set.has(id)) {
            const filterActiveCateogiesData = activeCategoriesData.filter(data => data !== id);
            setActiveCategoriesData(filterActiveCateogiesData);
            setCategoriesItemClicked(false);
        } else {
            setActiveCategoriesData(prev => [...prev, id]);
            setCategoriesItemClicked(true);
        }
    };
    return (
        <li
            key={key}
            id={id}
            className={`bg-[#E6F1FE] h-10 p-5 text-[#006FEE] text-center flex justify-center items-center rounded-lg ${
                categoriesItemClicked ? 'bg-black' : 'bg-[#E6F1FE]'
            }`}
            onClick={handleActiveCategoryItem}
        >
            {title}
        </li>
    );
}
