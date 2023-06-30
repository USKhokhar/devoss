import { Skeleton } from "@/components/ui/skeleton"

export default function Loading(){
    return (
        <Skeleton className="w-[200px] h-[40px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" />
    )
}