import {
  Minus,
  MinusCircleIcon,
  MinusSquareIcon,
  Plus,
  PlusCircleIcon,
  PlusSquareIcon,
} from 'lucide-react';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  return (
    <Card key={id} className="rounded-xl px-2 m-4">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>${price}</CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src={imgUrl}
          alt="product image"
          width={340}
          className="object-cover"
        />
      </CardContent>
      <hr className="h-[.02rem] bg-blue-200 border-none mb-6" />
      <CardFooter>
        <div className="flex gap-4 items-center">
          <Button variant="ghost">
            <PlusSquareIcon height={40} width={40} />
          </Button>
          <Button variant="ghost" size="icon">
            <MinusSquareIcon height={40} width={40} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default StoreItem;
