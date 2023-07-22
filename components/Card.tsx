import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardProps {
  title: string;
  description?: string;
  author?: string;
  level?: string;
  slug?: string;
}

const show = (prop: any) => {
    if(prop){
        return <CardContent className="text-center capitalize text-sm text-muted-foreground font-medium">{prop}</CardContent>
    } else {
        return null
    }
}

const CardComponent = ({ title, description, author, level, slug }: CardProps) => {
  return (
    <Card className={`${slug ? "cursor-pointer hover:bg-muted" : "pt-2 rounded-none border-r-0 border-l-0 border-t-0 border-b-2"} w-full mx-auto flex flex-col justify-center my-1.5 items-center`}>
      <CardHeader className={`${!description && "w-full flex-row justify-between items-center"}`}>
        <CardTitle className={` ${(title === 'Getting Started with devoss') && "grd-txt"} capitalize md:text-lg text-sm`}>{title}</CardTitle>
        {show(author)}
        {show(level)}
        {
            description ? <CardDescription className="py-2">{description}</CardDescription> : null
        }
      </CardHeader>
    </Card>
  );
};

export default CardComponent;
