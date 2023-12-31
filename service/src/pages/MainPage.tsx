import { useLocation } from 'react-router-dom';
import Aside from '../components/aside/Aside';
import CategoryList from '../components/category/CategoryList';
import { subscribe, unsubscribe } from '../webpush/main';
import SignUpPage from './SignUpPage';

export default function MainPage() {
    // 백엔드에서 받아온 providerId 받아온 값
    const { state } = useLocation();
    console.log(state);

    return (
        <div className="flex justify-between">
            <div className="flex flex-col">
                <div>
                    <CategoryList />
                </div>
                <div>
                    <button onClick={subscribe}>구독</button>
                    <button onClick={unsubscribe}>구독 취소</button>
                    <SignUpPage />
                </div>
            </div>

            <aside className="block max-w-md ">
                <div className="w-[100%]">
                    <Aside />
                </div>
            </aside>
        </div>
    );
}
