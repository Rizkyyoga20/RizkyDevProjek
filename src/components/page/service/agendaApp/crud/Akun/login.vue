<template>
    <div class="h-full flex items-center justify-center p-4 pt-50">
        <div x-data="{ email: '', password: '', name: '' }" 
             class="bg-black bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl w-full max-w-md transform hover:scale-105 transition-all duration-300"
             x-init="
                gsap.from($el, {opacity: 0, y: 50, duration: 1, ease: 'back'});
                gsap.from('.input-field', {opacity: 0, x: -50, stagger: 0.2, duration: 0.8, ease: 'power2.out'});
                gsap.from('.btn', {opacity: 0, scale: 0.5, duration: 0.5, delay: 1, ease: 'elastic.out(1, 0.5)'});
             ">
            <h2 class="text-4xl font-extrabold text-white mb-6 text-center animate-pulse">Sign Up</h2>

            
            <p class="text-white text-center mt-6">
                Already have an account? 
                <a href="#" class="font-bold hover:underline">Log in</a>
            </p>
            <div class="mt-8 flex justify-center space-x-4">
                <a href="#" class="text-white hover:text-purple-300 transition-colors duration-200">
                    <i class="fab fa-facebook-f text-2xl"></i>
                </a>
                <a href="#" class="text-white hover:text-purple-300 transition-colors duration-200">
                    <i class="fab fa-twitter text-2xl"></i>
                </a>
                <a href="#" class="text-white hover:text-purple-300 transition-colors duration-200">
                    <i class="fab fa-google text-2xl"></i>
                </a>
            </div>
        </div>
    </div>
</template>