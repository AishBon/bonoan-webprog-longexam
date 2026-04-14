import Button from '../../components/Button';

const HomePage = () => {
    return (
        <div className="relative flex w-full flex-col gap-16 overflow-hidden bg-[#fdf8f6] text-[#2d2d6b]">

            {/* SOFT LIGHT */}
            <div className="pointer-events-none absolute top-[-200px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#6c8cff]/10 blur-[120px]" />

            {/* HERO */}
            <section className="relative mx-4 mt-4 overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                
                <img
                    src="https://img.freepik.com/premium-photo/stall-pastries-pastry-shop_198067-568172.jpg"
                    alt="Bakery display"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_60%)]" />

                <div className="relative z-10 flex min-h-[26rem] items-center justify-end px-8 text-right">
                    <div className="max-w-xl">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/80">
                            Freshly Baked Daily
                        </p>

                        <h1 className="mt-3 text-4xl font-bold text-white drop-shadow-2xl">
                            Blueberry Bakehouse
                        </h1>

                        <p className="mt-4 text-white/90">
                            Handmade pastries, breads, and desserts crafted with care.
                        </p>

                        <div className="mt-6 flex justify-end gap-3">
                            <Button to="/products">Browse Menu</Button>
                            <Button to="/about" variant="primary">Our Story</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* SHOPPING BLOCKS */}
            <section className="px-6 py-12">
                <div className="mb-8">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#6c8cff]">
                        Store Overview
                    </p>
                    <h2 className="text-2xl font-semibold">
                        Quick shop insights
                    </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="rounded-3xl bg-white p-6 shadow-lg hover:shadow-xl transition">
                        <p className="text-3xl font-bold text-[#2d2d6b]">12</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-400">
                            Products
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-6 shadow-lg hover:shadow-xl transition">
                        <p className="text-3xl font-bold text-[#2d2d6b]">04</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-400">
                            Categories
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-6 shadow-lg hover:shadow-xl transition">
                        <p className="text-3xl font-bold text-[#2d2d6b]">12</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-400">
                            Orders
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-6 shadow-lg hover:shadow-xl transition">
                        <p className="text-3xl font-bold text-[#2d2d6b]">28</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-400">
                            Pickup Slots
                        </p>
                    </div>

                </div>
            </section>

            {/* FEATURED PRODUCTS */}
            <section className="px-6 py-12 bg-[#f3f6ff] rounded-[2rem] mx-4 shadow-inner">
                
                <div className="mb-8">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#6c8cff]">
                        Best Sellers
                    </p>
                    <h2 className="text-2xl font-semibold">
                        Fresh from the oven
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-3">

                    {/* PRODUCT CARD */}
                    <div className="group rounded-3xl bg-white p-5 shadow-md hover:shadow-xl transition">

                        <div className="aspect-square overflow-hidden rounded-2xl border border-gray-100">
                            <img
                                src="https://preppykitchen.com/wp-content/uploads/2020/04/Macaron-Recipe-1200.jpg"
                                alt="Strawberry Macarons"
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                            />
                        </div>

                        <h3 className="mt-4 text-lg font-semibold">
                            Strawberry Macarons
                        </h3>

                        <p className="text-sm text-gray-500">
                            Light and crispy with strawberry filling.
                        </p>

                        <Button
                            className="mt-4 rounded-full bg-[#2d2d6b] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#6c8cff] hover:shadow-lg hover:shadow-[#6c8cff]/30"
                            to="/products"
                        >
                            Order Now
                        </Button>
                    </div>

                    {/* PRODUCT CARD */}
                    <div className="group rounded-3xl bg-white p-5 shadow-md hover:shadow-xl transition">

                        <div className="aspect-square overflow-hidden rounded-2xl border border-gray-100">
                            <img
                                src="https://zestfulkitchen.com/wp-content/uploads/2020/04/milk-rolls_for-web-683x1024.jpg"
                                alt="Milk Bread"
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                            />
                        </div>

                        <h3 className="mt-4 text-lg font-semibold">
                            Soft Milk Bread
                        </h3>

                        <p className="text-sm text-gray-500">
                            Fluffy and lightly sweet.
                        </p>

                        {/* BUTTON */}
                        <Button
                            className="mt-4 rounded-full bg-[#2d2d6b] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#6c8cff] hover:shadow-lg hover:shadow-[#6c8cff]/30"
                            to="/products"
                        >
                            Order Now
                        </Button>
                    </div>

                    {/* PRODUCT CARD */}
                    <div className="group rounded-3xl bg-white p-5 shadow-md hover:shadow-xl transition">

                        <div className="aspect-square overflow-hidden rounded-2xl border border-gray-100">
                            <img
                                src="https://tse1.mm.bing.net/th/id/OIP.ryJ-kAWXxAhDz3L71S59IAHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3"
                                alt="Blueberry Cupcake"
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                            />
                        </div>

                        <h3 className="mt-4 text-lg font-semibold">
                            Blueberry Cupcakes
                        </h3>

                        <p className="text-sm text-gray-500">
                            Light, moist, and bursting with flavor.
                        </p>

                        {/* BUTTON */}
                        <Button
                            className="mt-4 rounded-full bg-[#2d2d6b] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#6c8cff] hover:shadow-lg hover:shadow-[#6c8cff]/30"
                            to="/products"
                        >
                            Order Now
                        </Button>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default HomePage;