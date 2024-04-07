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


                    <h2 class="text-lg font-semibold">Run Strapi</h2>
                    <ul class="list-disc">
                        <li>Open another terminal</li>
                        <li>Access the folder for strapi <code class="bg-gray-200 py-1 px-3 rounded-md">cd path/folder/of/strapi repo</code></li>
                        <li>Run <code class="bg-gray-200 py-1 px-3 rounded-md">npm install</code></li>
                        <li>Run <code class="bg-gray-200 py-1 px-3 rounded-md">npm run develop</code></li>
                        <li>Once Strapi is running, there's no need for additional coding; you can simply access the admin page.</li>
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
                        Please change the value to whatever URL of Strapi when delployed
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


<div v-for="res in resData">
    <!-- <SectionWrapper>
        <ContainerWrapper>
            <Row>
                <Column>
                    <div class="card" v-for="(carousel_data, carousel_data_index) in res.attributes.Carousel" :key="carousel_data_index">
                        <Carousel :value="carousel_data.Image.data" :numVisible="1">
                            <template #item="slotProps">
                                <Img
                                    :image_src="slotProps.data.attributes.url"
                                    image_alt="alt"
                                    image_loading="lazy"
                                />
                            </template>
                        </Carousel>
                    </div>
                </Column>
            </Row>
        </ContainerWrapper>
    </SectionWrapper> -->



    <SectionWrapper id="hero">
        <ContainerWrapper>
            <Row>
                <Column additional_class="sm:w-4/12" v-for="(card_data, card_data_index) in res.attributes.Card" :key="card_data_index">
                    <Card>
                        <template #title>{{ card_data.Title }}</template>
                        <template #content>
                            <p class="m-0">{{ card_data.Description }}</p>
                            <Img 
                                :image_src="card_data.Image.data?.attributes?.formats?.small?.url"
                                image_alt="alt"
                                image_loading="lazy"
                            />
                        </template>
                    </Card>
                </Column>
            </Row>
        </ContainerWrapper>
    </SectionWrapper>



</div>
</template>
