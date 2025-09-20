import { FileText, Search } from "lucide-react"
import React from "react"

interface FileSearchProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

export const FileSearch: React.FC<FileSearchProps> = ({ 
  className = "", 
  size = 24, 
  ...props 
}) => {
  return (
    <div className={`relative ${className}`} {...props}>
      <FileText size={size} />
      <Search 
        size={size * 0.55} 
        className="absolute bottom-0 right-0 bg-background rounded-full" 
      />
    </div>
  )
}

export default FileSearch