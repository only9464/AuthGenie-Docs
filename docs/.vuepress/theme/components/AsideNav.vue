<script setup lang="ts">
import { computed } from 'vue'
import { VPLink } from 'vuepress-theme-plume/client'
import { useRouteLocale } from 'vuepress/client'

interface Locale {
  star: string
  issue: string
  sponsor: string
}

const locales: Record<string, Locale> = {
  '/': { star: '在 GitHub 上 Star', issue: '遇到问题？', sponsor: '喝杯奶茶' },
  '/en/': { star: 'Star on GitHub', issue: 'Create Issues', sponsor: 'Buy me a Bubble Tea' },
}

const lang = useRouteLocale()
const locale = computed(() => locales[lang.value])
</script>

<template>
  <div class="aside-nav-wrapper">
    <VPLink class="link" no-icon href="https://github.com/only9464">
      <span class="vpi-github-star" />
      <span class="link-text">{{ locale.star }}</span>
      <span class="vpi-arrow-right" />
    </VPLink>
    <VPLink class="link" no-icon href="https://github.com/only9464">
      <span class="vpi-github-issue" />
      <span class="link-text">{{ locale.issue }}</span>
      <span class="vpi-arrow-right" />
    </VPLink>
    <VPLink class="link" href="/sponsor/">
      <span class="vpi-bubble-tea" />
      <span class="link-text">{{ locale.sponsor }}</span>
      <span class="vpi-arrow-right" />
    </VPLink>
  </div>
</template>

<style scoped>
.aside-nav-wrapper {
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  margin: 16px 16px 0;
  border-top: solid 1px var(--vp-c-divider);
}

.aside-nav-wrapper .link {
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  color: var(--vp-c-text-2);
  transition: color var(--vp-t-color);
}

.aside-nav-wrapper .link:hover {
  color: var(--vp-c-brand-1);
}

.aside-nav-wrapper .link .link-text {
  flex: 1 2;
  font-size: 12px;
}

.vpi-github-star {
  --icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSAxNXEuMy0uMy43MTMtLjN0LjcxMi4zTDIyIDE2LjZxLjMuMy4zLjd0LS4zLjd0LS43LjN0LS43LS4zTDE5IDE2LjQyNXEtLjMtLjMtLjMtLjcxMlQxOSAxNW0xLTEycS4zLjMuMy43MTN0LS4zLjcxMkwxOC40MjUgNnEtLjMuMy0uNzEyLjNUMTcgNnQtLjMtLjcxMnQuMy0uNzEzTDE4LjYgM3EuMy0uMy43LS4zdC43LjNNNCAzcS4zLS4zLjcxMy0uM3QuNzEyLjNMNyA0LjZxLjMuMy4zLjdUNyA2dC0uNzEyLjN0LS43MTMtLjNMNCA0LjQyNXEtLjMtLjMtLjMtLjcxMlQ0IDNtMSAxMnEuMy4zLjMuNzEzdC0uMy43MTJMMy40MjUgMThxLS4zLjMtLjcxMi4zVDIgMTh0LS4zLS43MTJ0LjMtLjcxM0wzLjYgMTVxLjMtLjMuNy0uM3QuNy4zbTMuODUgMS44MjVsMy4xNS0xLjlsMy4xNSAxLjkyNWwtLjgyNS0zLjZsMi43NzUtMi40bC0zLjY1LS4zMjVsLTEuNDUtMy40bC0xLjQ1IDMuMzc1bC0zLjY1LjMyNWwyLjc3NSAyLjQyNXptMy4xNS40NWwtNC4xNSAyLjVxLS4yNzUuMTc1LS41NzUuMTV0LS41MjUtLjJ0LS4zNS0uNDM3dC0uMDUtLjU4OGwxLjEtNC43MjVMMy43NzUgMTAuOHEtLjI1LS4yMjUtLjMxMi0uNTEzdC4wMzctLjU2MnQuMy0uNDV0LjU1LS4yMjVsNC44NS0uNDI1bDEuODc1LTQuNDVxLjEyNS0uMy4zODgtLjQ1dC41MzctLjE1dC41MzcuMTV0LjM4OC40NWwxLjg3NSA0LjQ1bDQuODUuNDI1cS4zNS4wNS41NS4yMjV0LjMuNDV0LjAzOC41NjN0LS4zMTMuNTEybC0zLjY3NSAzLjE3NWwxLjEgNC43MjVxLjA3NS4zMjUtLjA1LjU4OHQtLjM1LjQzN3QtLjUyNS4ydC0uNTc1LS4xNXoiLz48L3N2Zz4=")}

.vpi-github-issue {
  --icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PHBhdGggZmlsbD0iIzBjNmZmZiIgZD0iTTkuODU4IDE0Ljc2YzIuNTcuODkgNi4xMjIgMCA3LjQzMy0yLjkyMWE1LjY2NCA1LjY2NCAwIDAgMC02LjA4Mi03LjgyNGE1LjY2IDUuNjYgMCAwIDAtNC43MzMgNC44MjNjLS4xOSAxLjU1LjI1IDMuNzcxIDEuNjUgNC42ODJhLjMwMy4zMDMgMCAwIDAgLjM0LS41Yy0xLjEzLS43OS0xLjQxLTIuNzUyLTEuMTgtNC4wNzJhNC43NDIgNC43NDIgMCAxIDEgOS4xMDUgMi41M2MtMSAyLjQ5Mi00LjEwMiAzLjM2Mi02LjMyMyAyLjY3MmEuMzQuMzQgMCAwIDAtLjIxLjYxIi8+PHBhdGggZmlsbD0iIzAyMDIwMiIgZD0iTTIzLjY0NCA1LjgxNmMtLjEzLTEuMS0uMDctMy4yNzEtLjkyLTMuODcyQzIwLjgxMi41ODQgMTYuNjYuOTU0IDEzLjkxLjg1NGMtMy41MTItLjEyLTcuMTQ0LjE2LTEwLjYyNS4yNWEuMzQuMzQgMCAxIDAgMCAuNjdjMy40NzEtLjA1IDcuMDYzLS4yNiAxMC41ODUtLjA4YzIuNDguMTMgNi42NzMtLjEzIDguMjYzIDFjLjM4LjI5LjM5IDIuNDQyLjQ3IDMuMjAyYTM1IDM1IDAgMCAxIC4wNyA4LjEwNGMtLjA0Ny44OTQtLjE5NSAxLjc4LS40NCAyLjY0MWMtMi40NSAxLjI4LTE5Ljc0OSAyLjE4MS0yMC43Ni41NmExNy4zIDE3LjMgMCAwIDEtLjY0LTQuMTUxYTYwIDYwIDAgMCAxIC42LTEwLjg0NmEuMzExLjMxMSAwIDEgMC0uNDQtLjQ0Yy0uMzkuMzktLjMxIDEuNjQxLS4zOCAyLjA3MWE0NCA0NCAwIDAgMC0uNTIgMTAuMTg1Yy4wNDggMS4yNDguMjUzIDIuNDg1LjYxIDMuNjgyYy44NCAxLjQxIDYuMzEzIDEuNDYgOC4wMDQgMS40N2E0LjMgNC4zIDAgMCAwLS44OSAzLjAwMmMtLjc3IDAtMS40OTEuMS0yLjE2MS4xNmEuMy4zIDAgMSAwIDAgLjU5YzIgLjA3IDMuNTQxLjI3IDYuMDAzLjI1YzIuNDYtLjAyIDQuMDcxLS4yMyA2LjA3Mi0uMzhhLjM0LjM0IDAgMCAwIDAtLjY3aC0xLjg0YTguOCA4LjggMCAwIDAtMS4wMDEtMy4xNTJjMS4zMi0uMSA3LjU1My0uNTMgOC4yOTQtMS42M2E4LjcgOC43IDAgMCAwIC42NC0zLjE2MmEzNCAzNCAwIDAgMC0uMTgtOC4zNjRNMTUuMTIgMjIuMTI0Yy0yLjc0MS0uMDYtNC4xOTItLjA5LTYuNTUzIDBjLjE2LS4zOS4zOS0uOS41MS0xLjI5cS4yMTctLjgxNC4zLTEuNjUyYzAtLjEzLS4yNC4xMSA0LjY4My0uMTlhNi44IDYuOCAwIDAgMCAxLjA2IDMuMTMyIi8+PHBhdGggZmlsbD0iIzAyMDIwMiIgZD0iTTEzLjg4IDguNjM3YTEuNzIyIDEuNzIyIDAgMCAwLTIuMDAxLTJjLTEuNzQxLjIzLTIuMDcxIDIuNDQtMSAyLjMxYS4yOTEuMjkxIDAgMCAwIC4xMi0uNTdhLjUzLjUzIDAgMCAxIC4xOC0uNDJhMSAxIDAgMCAxIDEuNDYgMGMuMzcuNCAwIC44OS0uNDUgMS40NmMtLjE0LjE3LS43NC42NzEtLjY5IDEuMDUxYy4wNy42MiAxIC41Mi44OSAwYy4xOC0uMTEuMzctLjQzLjQ0LS40OWEzLjUgMy41IDAgMCAwIDEuMDUtMS4zNG0tMS45NDEgMi43NDFjLS44Ny0uMDctMS4yMSAxLjYuMDcgMS41MWMuMjEgMCAuNTMtLjA4LjY2LS4zNmEuNzIuNzIgMCAwIDAgLjA1LS42YTEgMSAwIDAgMC0uNzgtLjU1Ii8+PC9nPjwvc3ZnPg==") 
}

.vpi-bubble-tea {
  --icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik03LjU0IDRMOC43OS4yNmwxLjQyLjQ4TDkuMTIgNEgxMmwtMiAxMUg1TDMgNHptLS4wNCA3Yy0uNDEgMC0uNzUuMzQtLjc1Ljc1cy4zNC43NS43NS43NXMuNzUtLjM0Ljc1LS43NVM3LjkxIDExIDcuNSAxMW0tMS4yNSAxLjc1Yy0uNDEgMC0uNzUuMzQtLjc1Ljc1cy4zNC43NS43NS43NXMuNzUtLjM0Ljc1LS43NXMtLjM0LS43NS0uNzUtLjc1bTIuNSAwYy0uNDEgMC0uNzUuMzQtLjc1Ljc1cy4zNC43NS43NS43NXMuNzUtLjM0Ljc1LS43NXMtLjM0LS43NS0uNzUtLjc1bS0xLjI1LTRjLS40MSAwLS43NS4zNC0uNzUuNzVzLjM0Ljc1Ljc1Ljc1YS43NDkuNzQ5IDAgMSAwIDAtMS41bTIgMS4yNWMtLjQxIDAtLjc1LjM0LS43NS43NXMuMzQuNzUuNzUuNzVzLjc1LS4zNC43NS0uNzVTOS45MSAxMCA5LjUgMTBtLTQgMGMtLjQxIDAtLjc1LjM0LS43NS43NXMuMzQuNzUuNzUuNzVzLjc1LS4zNC43NS0uNzVTNS45MSAxMCA1LjUgMTBtNC4yNS0yLjI1Yy0uNDEgMC0uNzUuMzQtLjc1Ljc1cy4zNC43NS43NS43NXMuNzUtLjM0Ljc1LS43NXMtLjM0LS43NS0uNzUtLjc1Ii8+PC9zdmc+")}
</style>
