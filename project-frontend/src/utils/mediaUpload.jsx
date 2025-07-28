import { createClient } from "@supabase/supabase-js"


        const url = "https://mgnovgayinsjmjdjnmlk.supabase.co"
        const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nbm92Z2F5aW5zam1qZGpubWxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyMDQ4OTQsImV4cCI6MjA2ODc4MDg5NH0.TU4q4N6VFCm8ws_O8IlptE_feEk623uedBb-MFbPrW0"

        const supabase = createClient(url, key)

        export default function mediaUpload(file){

            const mediaUploadPromise = new Promise(
                (resole, reject)=>{
                    if(file == null){
                        reject("file is null")
                    }

                    const timestamp = new Date().getTime()
                    const fileName =  timestamp+file.name

                    supabase.storage.from('images').upload(fileName, file, {
                        upsert: false,
                        cacheControl: '3600'
                    
                    }).then(()=>{
                    
                        const publicUrl = supabase.storage.from('images').getPublicUrl(fileName)
                        resole(publicUrl.data.publicUrl)
                       
                       

                    }).catch((error)=>{
                        reject(error)
                    })

                }
            )

            return mediaUploadPromise

        }
    