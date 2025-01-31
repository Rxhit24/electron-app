<template>
    <Header title="Home"/>

    <div class="">
        <Button  @click="puppeteerLaunch" title="Launch"></Button>
    </div>
    <div class="overflow-x-auto rounded-lg shadow-lg border mx-2 my-3 border-gray-200">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-100">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proxy</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="profile, index in profiles" :key="index">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{profile.name}}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{profile.status}}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ profile.proxy }}</td>
                <td class="text-gray-500">
                    <button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                        Edit
                    </button>
                </td>
              </tr>
              <!-- Repeat rows as needed -->
            </tbody>
          </table>
    </div>
</template>

<script>
import Button from '../Button.vue';
import Header from '../helper/Header.vue';

 
export default {
    data(){
        return{
            profiles:[
                {
                    name: 'Profile1',
                    status: 'Active',
                    proxy: 'Active',

                },
                {
                    name: 'Profile2',
                    status: 'Active',
                    proxy: 'Active',

                },
                {
                    name: 'Profile3',
                    status: 'Active',
                    proxy: 'Active',

                }
            ]
        }
    },
    components:{
        Button,
        Header
    },
    methods:{
        puppeteerLaunch(){
            window.electron.ipcRenderer.send('puppeteer-launch',{
                userAgentData:{ 
                    // userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36", 
                    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36", 
                    locale: "en-US" 
                },
                webGLData:{
                    vendor: 'Nvidia Google Inc...',
                    renderer: 'TRIANGLE (Nvidia Google Inc.)'
                },
                userProfileData: '124' //this will be id of profile created storind id in string to start profile as requested
            })
        }
    }
}
</script>

<style>
</style>