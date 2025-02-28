"use client";
import Messages from "@/components/messages/messages";
import PageLayout from "@/components/pagelayout.tsx/page-layout";
import React, { useEffect, useState } from "react";


const ChatPage: React.FC = () => {



    return (
        <PageLayout>
            <Messages />
        </PageLayout>
    );
};

export default ChatPage;
