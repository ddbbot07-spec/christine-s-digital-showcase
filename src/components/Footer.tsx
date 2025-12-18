const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-8 border-t border-primary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-primary-foreground">
              C<span className="text-accent">.</span>E
            </span>
          </div>
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Christine R. Ecarma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
