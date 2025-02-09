import { PenLine, GraduationCap, FileText, Eye, ListTodo, Code, Image } from "lucide-react";

const actions = [
    { icon: <Image className="w-5 h-5" />, label: 'Create image' },
    { icon: <PenLine className="w-5 h-5" />, label: 'Help me write' },
    { icon: <GraduationCap className="w-5 h-5" />, label: 'Get advice' },
    { icon: <FileText className="w-5 h-5" />, label: 'Summarize text' },
    { icon: <Eye className="w-5 h-5" />, label: 'Analyze images' },
    { icon: <ListTodo className="w-5 h-5" />, label: 'Make a plan' },
    { icon: <Code className="w-5 h-5" />, label: 'Code', color: 'text-indigo-400' }
  ];

  import React from 'react'
import { Button } from "./ui/button";

  const Suggetions = () => {
    return (
      <div className="flex flex-wrap gap-2 justify-center">
        {actions.map((e, index) => {
            return(
                <Button key={index}>
                    <span>{e.icon}</span>
                    <span>{e.label}</span>
                </Button>
            )
        })}
      </div>
    )
  }

  export default Suggetions
