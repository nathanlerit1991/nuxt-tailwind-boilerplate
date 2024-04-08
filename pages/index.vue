<script setup lang="ts">
import { ref, onMounted } from 'vue'

//VUE PRIME
import Carousel from 'primevue/carousel';
import Card from 'primevue/card';

//CUSTOM
import SectionWrapper from '@/components/SectionWrapper.vue'
import ContainerWrapper from '@/components/ContainerWrapper.vue'
import Row from '@/components/Row.vue'
import Column from '@/components/Column.vue'
import Img from '@/components/UIElements/Img.vue'

//API
import apiData from '@/api/restaurant-api.js'
const resData = ref(null)
const getTemplateData = async () => {
    try {
        const response = await apiData.getData();
        resData.value = response?.data?.data;
    } catch (error) {
        console.error("Error", error);
    } 
};
onMounted(() => {
    getTemplateData()
})

</script>

<style>
h1 {
    margin-bottom: 15px;
}
h2 {
    margin-bottom: 10px;
}
p, li {
    margin: 8px 0;
}
</style>

<template>
    <SectionWrapper>
        <ContainerWrapper>
            <Row>
                <Column>
                    <h1 class="text-xl font-bold">Welcome to Nuxtjs 3 + PrimeVue(Tailwind) + Strapi</h1>
                    <p>This project consists of two repositories: Nuxt.js 3, utilized for templating, and Strapi, used as the content management system (CMS). Both repositories need to be run simultaneously as Nuxt.js fetches data from Strapi.</p>
                    <p>Additionally, this project is using PrimeVue(tailwind) as a UI library, SASS as preprocessor, Axios for HTTP client library and Strapi Populate Deep to easily fetch data</p>
                    <code class="bg-gray-200 py-1 px-3 rounded-md">Nodejs Version must be 18 above</code>
                    
                    <hr class="my-5">
                    
                    <h2 class="text-lg font-semibold">Run Nuxtjs 3</h2>
                    <ul class="list-disc">
                        <li>Open terminal</li>
                        <li>Access the folder for nuxt <code class="bg-gray-200 py-1 px-3 rounded-md">cd path/folder/of/nuxt repo</code></li>
                        <li>Run <code class="bg-gray-200 py-1 px-3 rounded-md">npm install</code></li>
                        <li>Run <code class="bg-gray-200 py-1 px-3 rounded-md">npm run dev</code></li>
                        <li>By default you can access Nuxt using <code class="bg-gray-200 py-1 px-3 rounded-md">http://localhost:3000/</code></li>
                    </ul>

                    <hr class="my-5">


                    <h2 class="text-lg font-semibold">Run Strapi ( <span class="text-red-600">Recommended if there's already existing project</span> )</h2>
                    <ul class="list-disc">
                        <li>Open another terminal</li>
                        <li>Access the folder for strapi <code class="bg-gray-200 py-1 px-3 rounded-md">cd path/folder/of/strapi repo</code></li>
                        <li>Run <code class="bg-gray-200 py-1 px-3 rounded-md">npm install</code></li>
                        <li>Run <code class="bg-gray-200 py-1 px-3 rounded-md">npm run develop</code></li>
                        <li>Create .env file in the root level of the project</li>
                        <li>
                            Here's the dummy .env Change the values depending on your project configuration<br/>
                            <code class="bg-gray-200 py-1 px-3 rounded-md">
                                HOST=0.0.0.0<br/>
                                PORT=1337<br/>
                                APP_KEYS=gV6Gweat+ZDf93cG/brA4A==,OgxT6Cm8Kzga3X2G09yU1w==,ar5OFZLbrYgWFJRK+GsEug==,NZW9fKwu3+wFoloYLoQOOg==<br/>
                                API_TOKEN_SALT=EtFcek8yaSfrorBflTRIYg==<br/>
                                ADMIN_JWT_SECRET=fSM5LmhTXtedFZDxSJm8Rg==<br/>
                                TRANSFER_TOKEN_SALT=Fe0iF9/KTrhSqht5OfTAPg==<br/>
                                # Database<br/>
                                DATABASE_CLIENT=sqlite<br/>
                                DATABASE_FILENAME=.tmp/data.db<br/>
                                JWT_SECRET=uu1v5csf46Q89EVhWQeITA==
                            </code>
                        </li>
                        <li>Once Strapi is running, you just have to Register / Login and there's no need for additional coding; you can simply access the admin page.</li>
                        <li>By default you can access Strapi using <code class="bg-gray-200 py-1 px-3 rounded-md">http://localhost:1337/</code></li>
                    </ul>

                    <hr class="my-5">

                    <h2 class="text-lg font-semibold">Install Strapi From scratch ( <span class="text-red-600">Just incase you want to start fresh</span> )</h2>
                    <ul class="list-disc">
                        <li>Run <code class="bg-gray-200 py-1 px-3 rounded-md">npx create-strapi-app@latest my-project --quickstart</code></li>
                        <li>.env is automatically configured</li>
                        <li>Once Strapi is running, you just have to Register / Login and there's no need for additional coding; you can simply access the admin page.</li>
                        <li>By default you can access Strapi using <code class="bg-gray-200 py-1 px-3 rounded-md">http://localhost:1337/</code></li>
                    </ul>
                </Column>
            </Row>
        </ContainerWrapper>
    </SectionWrapper>
    <hr class="my-5">
    <SectionWrapper>
        <ContainerWrapper>
            <Row>
                <Column>
                    <h2 class="text-lg font-semibold">Nuxtjs 3 structure</h2>
                    <ul class="list-disc">
                        <li>If you don't intend to implement roles and permissions, there's no need to configure routes in Nuxt.js. It will automatically generate routes for you. Just create vue file inside <code class="bg-gray-200 py-1 px-3 rounded-md">pages</code> and thats it</li>
                        <li>Initially, we have <code class="bg-gray-200 py-1 px-3 rounded-md">.env</code> file where we specify the <code class="bg-gray-200 py-1 px-3 rounded-md">VITE_API_BASE_URL=http://127.0.0.1:1337</code>
                        Please be aware that we're utilizing 127.0.0.1 instead of localhost, as they function equivalently, with localhost merely serving as an alias. However, utilizing localhost may result in an error within Strapi. Kindly adjust the value to match the URL of your deployed Strapi instance.
                        </li>
                        <li>To make it more organize, we created <code class="bg-gray-200 py-1 px-3 rounded-md">api</code> folder. This will consist all the HTTP request</li>
                        <li>An example API request is already provided. Simply copy and paste it, then adjust the value of <code class="bg-gray-200 py-1 px-3 rounded-md">API_PREFIX</code> according to your endpoint</li>
                    </ul>
                    <hr class="my-5">

                    <h2 class="text-lg font-semibold">Components</h2>
                    <ul class="list-disc">
                        <li>There are default components available, please use them whenever possible.</li>
                        <li><code class="bg-gray-200 py-1 px-3 rounded-md">SectionWrapper</code> <code class="bg-gray-200 py-1 px-3 rounded-md">ContainerWrapper</code> <code class="bg-gray-200 py-1 px-3 rounded-md">Row</code> and <code class="bg-gray-200 py-1 px-3 rounded-md">Column</code> will serve as the main foundation of the grid layout. They already have predefined classnames to make sure the consistency of the website. You can change the default values in <code class="bg-gray-200 py-1 px-3 rounded-md">tailwind.config.js</code></li>
                        <li>You have the option to utilize the <code class="bg-gray-200 py-1 px-3 rounded-md">additional_class</code>prop to modify or append styling using Tailwind classnames</li>
                        <li><code class="bg-gray-200 py-1 px-3 rounded-md">Img</code> component already have necessary data available within its props.</li>
                        <li><code class="bg-gray-200 py-1 px-3 rounded-md">SVGIcon</code> Just convert the svg file into vue file by changing the file extension. Then, organize all SVG files within the <code class="bg-gray-200 py-1 px-3 rounded-md">components > SVG</code> folder. This setup will automatically fetch all SVG files for use.</li>
                    </ul>
                </Column>
            </Row>
        </ContainerWrapper>
    </SectionWrapper>


    <SectionWrapper>
        <ContainerWrapper>
            <Row>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/1.jpg" alt="Naruto Image 1"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/2.jpg" alt="Naruto Image 2"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/3.jpg" alt="Naruto Image 3"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/4.jpg" alt="Naruto Image 4"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/5.jpg" alt="Naruto Image 5"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/6.jpg" alt="Naruto Image 6"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/7.jpg" alt="Naruto Image 7"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/8.jpg" alt="Naruto Image 8"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/9.jpg" alt="Naruto Image 9"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/10.jpg" alt="Naruto Image 10"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/11.jpg" alt="Naruto Image 11"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/12.jpg" alt="Naruto Image 12"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/13.jpg" alt="Naruto Image 13"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/14.jpg" alt="Naruto Image 14"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/15.jpg" alt="Naruto Image 15"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/16.jpg" alt="Naruto Image 16"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/17.jpg" alt="Naruto Image 17"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/18.jpg" alt="Naruto Image 18"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/19.jpg" alt="Naruto Image 19"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/20.jpg" alt="Naruto Image 20"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/21.jpg" alt="Naruto Image 21"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/22.jpg" alt="Naruto Image 22"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/23.jpg" alt="Naruto Image 23"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/24.jpg" alt="Naruto Image 24"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/25.jpg" alt="Naruto Image 25"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/26.jpg" alt="Naruto Image 26"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/27.jpg" alt="Naruto Image 27"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/28.jpg" alt="Naruto Image 28"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/29.jpg" alt="Naruto Image 29"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/30.jpg" alt="Naruto Image 30"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/31.jpg" alt="Naruto Image 31"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/32.jpg" alt="Naruto Image 32"/>
                </Column>

            </Row>
        </ContainerWrapper>
    </SectionWrapper>

    <SectionWrapper>
        <ContainerWrapper>
            <Row>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/1.jpg" alt="Naruto Image 1"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/2.jpg" alt="Naruto Image 2"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/3.jpg" alt="Naruto Image 3"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/4.jpg" alt="Naruto Image 4"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/5.jpg" alt="Naruto Image 5"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/6.jpg" alt="Naruto Image 6"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/7.jpg" alt="Naruto Image 7"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/8.jpg" alt="Naruto Image 8"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/9.jpg" alt="Naruto Image 9"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/10.jpg" alt="Naruto Image 10"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/11.jpg" alt="Naruto Image 11"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/12.jpg" alt="Naruto Image 12"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/13.jpg" alt="Naruto Image 13"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/14.jpg" alt="Naruto Image 14"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/15.jpg" alt="Naruto Image 15"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/16.jpg" alt="Naruto Image 16"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/17.jpg" alt="Naruto Image 17"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/18.jpg" alt="Naruto Image 18"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/19.jpg" alt="Naruto Image 19"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/20.jpg" alt="Naruto Image 20"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/21.jpg" alt="Naruto Image 21"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/22.jpg" alt="Naruto Image 22"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/23.jpg" alt="Naruto Image 23"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/24.jpg" alt="Naruto Image 24"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/25.jpg" alt="Naruto Image 25"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/26.jpg" alt="Naruto Image 26"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/27.jpg" alt="Naruto Image 27"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/28.jpg" alt="Naruto Image 28"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/29.jpg" alt="Naruto Image 29"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/30.jpg" alt="Naruto Image 30"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/31.jpg" alt="Naruto Image 31"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/32.jpg" alt="Naruto Image 32"/>
                </Column>

            </Row>
        </ContainerWrapper>
    </SectionWrapper>

    <SectionWrapper>
        <ContainerWrapper>
            <Row>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/1.jpg" alt="Naruto Image 1"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/2.jpg" alt="Naruto Image 2"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/3.jpg" alt="Naruto Image 3"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/4.jpg" alt="Naruto Image 4"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/5.jpg" alt="Naruto Image 5"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/6.jpg" alt="Naruto Image 6"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/7.jpg" alt="Naruto Image 7"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/8.jpg" alt="Naruto Image 8"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/9.jpg" alt="Naruto Image 9"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/10.jpg" alt="Naruto Image 10"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/11.jpg" alt="Naruto Image 11"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/12.jpg" alt="Naruto Image 12"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/13.jpg" alt="Naruto Image 13"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/14.jpg" alt="Naruto Image 14"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/15.jpg" alt="Naruto Image 15"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/16.jpg" alt="Naruto Image 16"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/17.jpg" alt="Naruto Image 17"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/18.jpg" alt="Naruto Image 18"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/19.jpg" alt="Naruto Image 19"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/20.jpg" alt="Naruto Image 20"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/21.jpg" alt="Naruto Image 21"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/22.jpg" alt="Naruto Image 22"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/23.jpg" alt="Naruto Image 23"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/24.jpg" alt="Naruto Image 24"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/25.jpg" alt="Naruto Image 25"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/26.jpg" alt="Naruto Image 26"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/27.jpg" alt="Naruto Image 27"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/28.jpg" alt="Naruto Image 28"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/29.jpg" alt="Naruto Image 29"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/30.jpg" alt="Naruto Image 30"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/31.jpg" alt="Naruto Image 31"/>
                </Column>
                <Column additional_class="sm:w-4/12">
                    <img src="@/assets/images/naruto/32.jpg" alt="Naruto Image 32"/>
                </Column>

            </Row>
        </ContainerWrapper>
    </SectionWrapper>
</template>
