import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  BookOpenIcon,
  GitBranchIcon,
  GithubIcon,
  HomeIcon,
  LayoutPanelLeftIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function Generator() {
  return (
    <div className="my-3">
      <div className="mb-6 flex items-center justify-between">
        <div className="w-full  px-5">
          <h1 className="text-2xl font-bold">Start Generating now</h1>
          <p className="text-muted-foreground">
            generate any document you need
          </p>
        </div>
        {/* <Button>Create New Project</Button> */}
      </div>
        <Separator/>
      <div className="grid mt-4 p-3 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex items-center gap-4">
            <HomeIcon className="h-8 w-8" />
            <div className="grid gap-1">
              <CardTitle>Receipts</CardTitle>
              <CardDescription>example.com</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="grid gap-2">
            <div className="text-sm font-semibold">
              feat: update color scheme
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <GithubIcon className="h-4 w-4" />
                <span className="text-muted-foreground">3h ago</span>
              </div>
              <div className="flex items-center gap-1">
                <GitBranchIcon className="h-4 w-4" />
                <span className="text-muted-foreground">main</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center gap-4">
            <BookOpenIcon className="h-8 w-8" />
            <div className="grid gap-1">
              <CardTitle>Invoices</CardTitle>
              <CardDescription>docs.example.com</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="grid gap-2">
            <div className="text-sm font-semibold">
              docs: add docs for memberships
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <GithubIcon className="h-4 w-4" />
                <span className="text-muted-foreground">1 day ago</span>
              </div>
              <div className="flex items-center gap-1">
                <GitBranchIcon className="h-4 w-4" />
                <span className="text-muted-foreground">main</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center gap-4">
            <LayoutPanelLeftIcon className="h-8 w-8" />
            <div className="grid gap-1">
              <CardTitle>Appointments</CardTitle>
              <CardDescription>app.example.com</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="grid gap-2">
            <div className="text-sm font-semibold">fix: login issues</div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <GithubIcon className="h-4 w-4" />
                <span className="text-muted-foreground">2 days ago</span>
              </div>
              <div className="flex items-center gap-1">
                <GitBranchIcon className="h-4 w-4" />
                <span className="text-muted-foreground">main</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center gap-4">
            <HomeIcon className="h-8 w-8" />
            <div className="grid gap-1">
              <CardTitle>Expenses report</CardTitle>
              <CardDescription>example.com</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="grid gap-2">
            <div className="text-sm font-semibold">
              feat: update color scheme
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <GithubIcon className="h-4 w-4" />
                <span className="text-muted-foreground">3h ago</span>
              </div>
              <div className="flex items-center gap-1">
                <GitBranchIcon className="h-4 w-4" />
                <span className="text-muted-foreground">main</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center gap-4">
            <BookOpenIcon className="h-8 w-8" />
            <div className="grid gap-1">
              <CardTitle>Quotations</CardTitle>
              <CardDescription>docs.example.com</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="grid gap-2">
            <div className="text-sm font-semibold">
              docs: add docs for memberships
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <GithubIcon className="h-4 w-4" />
                <span className="text-muted-foreground">1 day ago</span>
              </div>
              <div className="flex items-center gap-1">
                <GitBranchIcon className="h-4 w-4" />
                <span className="text-muted-foreground">main</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center gap-4">
            <LayoutPanelLeftIcon className="h-8 w-8" />
            <div className="grid gap-1">
              <CardTitle>app</CardTitle>
              <CardDescription>app.example.com</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="grid gap-2">
            <div className="text-sm font-semibold">fix: login issues</div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <GithubIcon className="h-4 w-4" />
                <span className="text-muted-foreground">2 days ago</span>
              </div>
              <div className="flex items-center gap-1">
                <GitBranchIcon className="h-4 w-4" />
                <span className="text-muted-foreground">main</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
