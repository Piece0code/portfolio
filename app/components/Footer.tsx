// import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-[1600px] mx-auto px-2 lg:px-2 py-2">

        <div className="mt-4 flex justify-center">
          <p className="text-[14px] font-medium tracking-wide text-neutral-400 dark:text-neutral-500 text-center">
            © {currentYear} Delgerbayar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
