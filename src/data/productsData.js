const productsData = [
    // ==================== WOMEN ====================

    {
        id: 1,
        product_title: "Oversized Cotton T-Shirt",
        product_price: 39.99,
        product_description:
            "A comfortable oversized cotton t-shirt with a relaxed fit, perfect for everyday casual outfits.",
        product_image:
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "Zara",
        product_category: "t-shirts",
        product_stock: 7,
        product_gender: "women",
    },

    {
        id: 2,
        product_title: "High-Waisted Straight Jeans",
        product_price: 69.99,
        product_description:
            "Classic high-waisted straight-leg jeans made from durable denim with a comfortable everyday fit.",
        product_image:
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "Levi's",
        product_category: "jeans",
        product_stock: 4,
        product_gender: "women",
    },

    {
        id: 3,
        product_title: "Floral Midi Dress",
        product_price: 89.99,
        product_description:
            "A lightweight floral midi dress featuring a flattering silhouette and an elegant design for any occasion.",
        product_image:
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "Mango",
        product_category: "dresses",
        product_stock: 2,
        product_gender: "women",
    },

    {
        id: 4,
        product_title: "Classic Linen Shirt",
        product_price: 59.99,
        product_description:
            "Breathable linen shirt with a relaxed silhouette, ideal for warm days and effortless styling.",
        product_image:
            "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "H&M",
        product_category: "shirts",
        product_stock: 9,
        product_gender: "women",
    },

    {
        id: 5,
        product_title: "Relaxed Fit Hoodie",
        product_price: 64.99,
        product_description:
            "Soft fleece hoodie with a relaxed fit, adjustable hood and ribbed cuffs for extra comfort.",
        product_image:
            "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "Nike",
        product_category: "hoodies",
        product_stock: 5,
        product_gender: "women",
    },

    {
        id: 6,
        product_title: "Pleated Wide Leg Trousers",
        product_price: 74.99,
        product_description:
            "Elegant wide-leg trousers with a high waist and pleated front, suitable for both casual and formal looks.",
        product_image:
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "Mango",
        product_category: "trousers",
        product_stock: 3,
        product_gender: "women",
    },

    {
        id: 7,
        product_title: "Cropped Denim Jacket",
        product_price: 79.99,
        product_description:
            "A timeless cropped denim jacket with a modern silhouette that pairs easily with dresses and jeans.",
        product_image:
            "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "Levi's",
        product_category: "jackets",
        product_stock: 6,
        product_gender: "women",
    },

    {
        id: 8,
        product_title: "Ribbed Knit Sweater",
        product_price: 54.99,
        product_description:
            "Soft ribbed knit sweater designed with a clean silhouette for comfortable everyday wear.",
        product_image:
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "Uniqlo",
        product_category: "sweaters",
        product_stock: 1,
        product_gender: "women",
    },

    {
        id: 9,
        product_title: "Satin Evening Blouse",
        product_price: 49.99,
        product_description:
            "Elegant satin blouse with a smooth finish, perfect for evening outfits and special occasions.",
        product_image:
            "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "Zara",
        product_category: "blouses",
        product_stock: 8,
        product_gender: "women",
    },

    {
        id: 10,
        product_title: "Relaxed Cotton Shorts",
        product_price: 44.99,
        product_description:
            "Lightweight cotton shorts with a relaxed fit and elastic waistband for comfortable summer outfits.",
        product_image:
            "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "H&M",
        product_category: "shorts",
        product_stock: 4,
        product_gender: "women",
    },

    {
        id: 11,
        product_title: "Classic Trench Coat",
        product_price: 129.99,
        product_description:
            "A sophisticated classic trench coat featuring a belted waist and timeless double-breasted design.",
        product_image:
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "Burberry",
        product_category: "coats",
        product_stock: 2,
        product_gender: "women",
    },

    {
        id: 12,
        product_title: "Basic Cotton Tank Top",
        product_price: 29.99,
        product_description:
            "Minimal cotton tank top with a comfortable fit that works perfectly as a daily essential.",
        product_image:
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "Uniqlo",
        product_category: "tops",
        product_stock: 10,
        product_gender: "women",
    },

    // ==================== MEN ====================

    {
        id: 13,
        product_title: "Classic Crew Neck T-Shirt",
        product_price: 34.99,
        product_description:
            "A classic crew neck t-shirt made from soft cotton with a regular fit for everyday comfort.",
        product_image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "Uniqlo",
        product_category: "t-shirts",
        product_stock: 6,
        product_gender: "men",
    },

    {
        id: 14,
        product_title: "Slim Fit Denim Jeans",
        product_price: 74.99,
        product_description:
            "Modern slim-fit jeans made from stretch denim for a comfortable fit and everyday versatility.",
        product_image:
            "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "Levi's",
        product_category: "jeans",
        product_stock: 3,
        product_gender: "men",
    },

    {
        id: 15,
        product_title: "Oxford Button Down Shirt",
        product_price: 59.99,
        product_description:
            "Classic Oxford shirt featuring a button-down collar and versatile design suitable for smart-casual outfits.",
        product_image:
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "Ralph Lauren",
        product_category: "shirts",
        product_stock: 7,
        product_gender: "men",
    },

    {
        id: 16,
        product_title: "Classic Cotton Polo",
        product_price: 49.99,
        product_description:
            "Timeless cotton polo shirt with a regular fit and classic collar for a clean casual appearance.",
        product_image:
            "https://images.unsplash.com/photo-1625910513413-5fc45d9a5f1f?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "Lacoste",
        product_category: "polo shirts",
        product_stock: 5,
        product_gender: "men",
    },

    {
        id: 17,
        product_title: "Lightweight Bomber Jacket",
        product_price: 99.99,
        product_description:
            "Modern lightweight bomber jacket with ribbed cuffs and collar, perfect for transitional weather.",
        product_image:
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "Zara",
        product_category: "jackets",
        product_stock: 1,
        product_gender: "men",
    },

    {
        id: 18,
        product_title: "Relaxed Cotton Hoodie",
        product_price: 69.99,
        product_description:
            "Comfortable cotton-blend hoodie with a relaxed fit, kangaroo pocket and adjustable drawstring hood.",
        product_image:
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "Nike",
        product_category: "hoodies",
        product_stock: 8,
        product_gender: "men",
    },

    {
        id: 19,
        product_title: "Regular Fit Chino Trousers",
        product_price: 64.99,
        product_description:
            "Versatile chino trousers with a regular fit, ideal for both casual and smart-casual outfits.",
        product_image:
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "Zara",
        product_category: "trousers",
        product_stock: 4,
        product_gender: "men",
    },

    {
        id: 20,
        product_title: "Textured Knit Sweater",
        product_price: 79.99,
        product_description:
            "Warm textured knit sweater with a classic crew neck and comfortable regular fit.",
        product_image:
            "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "H&M",
        product_category: "sweaters",
        product_stock: 2,
        product_gender: "men",
    },

    {
        id: 21,
        product_title: "Linen Blend Summer Shirt",
        product_price: 54.99,
        product_description:
            "Breathable linen-blend shirt with a relaxed fit, designed for warm-weather casual outfits.",
        product_image:
            "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "Mango",
        product_category: "shirts",
        product_stock: 9,
        product_gender: "men",
    },

    {
        id: 22,
        product_title: "Classic Denim Jacket",
        product_price: 89.99,
        product_description:
            "Classic denim jacket featuring a durable construction and timeless design that works across seasons.",
        product_image:
            "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "Levi's",
        product_category: "jackets",
        product_stock: 6,
        product_gender: "men",
    },

    {
        id: 23,
        product_title: "Essential Cotton Shorts",
        product_price: 39.99,
        product_description:
            "Comfortable cotton shorts with a clean design and relaxed fit, perfect for everyday summer wear.",
        product_image:
            "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "Uniqlo",
        product_category: "shorts",
        product_stock: 3,
        product_gender: "men",
    },

    {
        id: 24,
        product_title: "Classic Wool Blend Coat",
        product_price: 149.99,
        product_description:
            "Elegant wool-blend coat with a structured silhouette, designed to provide warmth and timeless style.",
        product_image:
            "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=600&h=600&q=80",
        product_brand: "Massimo Dutti",
        product_category: "coats",
        product_stock: 0,
        product_gender: "men",
    },
];

export default productsData