import { Breadcrumbs } from "@mantine/core";
import { Link } from "react-router-dom";

type CurrentUrl = {
  title: string;
  href: string;
};

interface CrumbProps {
  title: string;
  currentUrl: CurrentUrl[];
}

export const PageBreadcrumbs = ({ currentUrl, title }: CrumbProps) => {
  return (
    <div className="flex justify-between p-4 bg-cyan-100">
      <span className="text-lg font-bold">{title}</span>
      <Breadcrumbs>
        {currentUrl.map((item, index) => (
          <Link to={item.href} key={index}>
            {item.title}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
};
