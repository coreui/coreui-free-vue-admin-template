<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Nav</strong>
        </CCardHeader>
        <CCardBody>
            <h4 class="mt-4">Base Nav</h4>
            <Example href="components/nav.html#base-nav">
                <CNav>
                    <CNavItem>
                    <CNavLink href="#" active>
                        Active
                    </CNavLink>
                    </CNavItem>
                    <CNavItem>
                    <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                    <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                    <CNavLink href="#" disabled>
                        Disabled
                    </CNavLink>
                    </CNavItem>
                </CNav>
            </Example>

            <h4 class="mt-4">Nav horizontal alignment</h4>
            <Example href="components/nav.html#horizontal-alignment">
                <CNav class="justify-content-center">
                    <CNavItem>
                        <CNavLink href="#" active>
                        Active
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#" disabled>
                        Disabled
                        </CNavLink>
                    </CNavItem>
                </CNav>
            </Example>

            <h4 class="mt-4">Nav right alignment</h4>
            <Example href="components/nav.html#horizontal-alignment">
                <CNav class="justify-content-end">
                    <CNavItem>
                        <CNavLink href="#" active>
                        Active
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#" disabled>
                        Disabled
                        </CNavLink>
                    </CNavItem>
                </CNav>
            </Example>

            <h4 class="mt-4">Vertical nav</h4>
            <Example href="components/nav.html#vertical">
                <CNav class="flex-column">
                    <CNavItem>
                        <CNavLink href="#" active>
                        Active
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#" disabled>
                        Disabled
                        </CNavLink>
                    </CNavItem>
                </CNav>
            </Example>

            <h4 class="mt-4">Tabs nav</h4>
            <Example href="components/nav.html#tabs">
                <CNav variant="tabs">
                    <CNavItem>
                        <CNavLink href="#" active>
                        Active
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#" disabled>
                        Disabled
                        </CNavLink>
                    </CNavItem>
                </CNav>
            </Example>

            <h4 class="mt-4">Pills nav</h4>
            <Example href="components/nav.html#pills">
                <CNav variant="pills">
                    <CNavItem>
                        <CNavLink href="#" active>
                        Active
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#" disabled>
                        Disabled
                        </CNavLink>
                    </CNavItem>
                </CNav>
            </Example>

            <h4 class="mt-4">Fill nav</h4>
            <Example href="components/nav.html#fill-and-justify">
                <CNav variant="pills" layout="fill">
                    <CNavItem>
                        <CNavLink href="#" active>
                        Active
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#" disabled>
                        Disabled
                        </CNavLink>
                    </CNavItem>
                </CNav>
            </Example>

            <h4 class="mt-4">Justified nav</h4>
            <Example href="components/nav.html#fill-and-justify">
                <CNav variant="pills" layout="justified">
                    <CNavItem>
                        <CNavLink href="#" active>
                        Active
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#" disabled>
                        Disabled
                        </CNavLink>
                    </CNavItem>
                </CNav>
            </Example>

            <h4 class="mt-4">Vue nav with dropdown</h4>
            <Example href="components/nav.html#using-dropdowns">
                <CNav>
                    <CNavItem>
                        <CNavLink href="#" active>
                        Active
                        </CNavLink>
                    </CNavItem>
                    <CDropdown variant="nav-item">
                        <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                        <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                    <CNavItem>
                        <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#" disabled>
                        Disabled
                        </CNavLink>
                    </CNavItem>
                </CNav>
            </Example>

            <h4 class="mt-4">Vue pills nav with dropdown</h4>
            <Example href="components/nav.html#pills-with-dropdowns">
                <CNav variant="pills">
                    <CNavItem>
                        <CNavLink href="#" active>
                        Active
                        </CNavLink>
                    </CNavItem>
                    <CDropdown variant="nav-item">
                        <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                        <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                    <CNavItem>
                        <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#" disabled>
                        Disabled
                        </CNavLink>
                    </CNavItem>
                </CNav>
            </Example>


        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "Navs",
};
</script>