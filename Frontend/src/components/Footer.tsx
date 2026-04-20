import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer id="about" className="border-t border-border bg-background py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-accent">
              <Leaf className="h-4 w-4 text-accent-foreground" />
            </span>
            <span className="font-display text-lg font-bold">
              Agri<span className="text-primary">Rakshak</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AgriRakshak. Cultivating intelligence for agriculture.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
