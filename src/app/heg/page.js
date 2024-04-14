"use client"
import React, { useEffect, useState } from "react";

import { IndicTransliterate } from "@ai4bharat/indic-transliterate";
// import "@ai4bharat/indic-transliterate/dist/index.css";
import './index.css'
import { getTransliterateSuggestions } from "@ai4bharat/indic-transliterate";
import { TriggerKeys } from "@ai4bharat/indic-transliterate";
import { insertStory } from "../storydb/db";
import Link from "next/link";
// import { eventManager } from "react-toastify/dist/core";
const App = () => {
  const [text, setText] = useState("");
  const [hidden,setHidden] = useState(false)
  if (event.key == " ")
  {
    localStorage.setItem("hinder",text)
    // setText(text)
  }
  useEffect(()=>{
       
        const story = localStorage.getItem("hinder");
        setText(story);
  },[])
  return (
    <div className="w-full h-full overflow-x-hidden bg-[#252626]" >
    <div className={`flex  flex-col ${hidden ? 'absolute' : 'hidden'} z-50 right-0 bg-[#00000033]  w-1/4 h-full`}  >
        <div className="h-[60px] bg-black transition-all flex justify-end items-center   w-[100%] " >
                <div onClick={()=>{
                    setHidden(false)

                }} className=" bg-white text-black w-8 text-center h-8 mr-3 rounded-xl -pt-3 text-2xl">
                    x
                </div>
        </div>
        <div className="w-100% h-auto flex flex-col " >
            <div className="btn-database  bg-black  p-4 pl-5 pr-5 border-b-2 h-fit text-center " onClick={()=>{
                insertStory()
            }} >Add To Database</div>
            <div className="btn-showcount  bg-black  p-4 pl-5 pr-5 border-b-2 h-fit text-center " onClick={()=>{
                const cnt = text.split(" ");
                // console.log(cnt)
                alert(`count of words is ${cnt.length}`)
            }}>Show Count</div>
            
        </div>
    </div>
    <div className="h-16 z-10 absolute w-full flex justify-between " >
        <div className="text-black bg-white m-4 pl-4 pr-4 rounded-xl flex justify-center items-center " >
        <Link href='/storydb' target='dd'>History</Link>
        </div>
        <div className="text-white bg-white m-4 pl-2 pr-2 rounded-xl flex justify-center items-center " 
            onClick={()=>{
                setHidden(true)
                
            }}
        >
            
            <svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                <path  d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
            </svg>
        </div>
    </div>
    <div className="w-screen flex justify-center items-center h-screen text-black ">
        <div className="w-4/6 h-4/5 bg-black">

                <IndicTransliterate
                renderComponent={(props) => <textarea rows={25} {...props} />}
                value={text}
                onChangeText={(text) => {
                    setText(text)
                }}
                lang="hi"
                placeholder="Start typing here..."
                id="react-transliterate-textarea"
                triggerKeys={[
                    TriggerKeys.KEY_ENTER,
                    TriggerKeys.KEY_SPACE,
                ]}
            />
        </div>
       </div>
    </div>
  );
};

export default App;