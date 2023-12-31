import { Outlet } from 'react-router-dom';

import Header from '@monorepo/component/src/stories/header/Header';

export default function Layout() {
    return (
        <>
            <Header />
            <div className="block m-auto mx-10 mt-5">
                <main>
                    <section aria-label="메인 콘텐츠">
                        <Outlet />
                    </section>
                </main>
            </div>
        </>
    );
}
